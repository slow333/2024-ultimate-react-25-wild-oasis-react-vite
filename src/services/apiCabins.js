import supabase, {supabaseUrl} from "./supabase.js";

export async function getCabins() {

  let {data, error} = await supabase
       .from('cabins')
       .select('*');
  if (error) {
    console.error(error);
    throw new Error("Cabins 데이터를 가져올수 없습니다.")
  }
  return data;
}

export async function deleteCabin(id) {
  const {data, error} = await supabase
       .from('cabins')
       .delete()
       .eq('id', id);
  if (error) throw new Error("Cabin could not be deleted. from error apiCabins")
  return data;
}

export async function createEditCabin(newCabin, id) {

  const hasImagePath = newCabin?.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/', '');
  const imagePath = hasImagePath
       ? newCabin.image
       : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;


// 1. create/edit cabin
  let query = supabase.from('cabins')

  // 1-1. Create
  if (!id)
    query = query.insert([{...newCabin, image: imagePath}])
  // 1-2. Edit
  if(id)
    query = query
       .update({...newCabin, image: imagePath})
       .eq('id', id)

  const {data, error} = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be inserted. from error apiCabins");
  }

  // 2. upload image
  if(hasImagePath) return data;

  const {error: storageErr} = await supabase.storage
       .from('cabin-images').upload(imageName, newCabin.image)
  if (storageErr) {
    await supabase.from('cabins').delete().eq('id', data.id);
    console.log(storageErr);
    throw new Error("Cabin image upload error. Cabin Can not created. from error apiCabins");
  } else {
    // toast.success("Good upload OK")
  }

  return data;
}

// https://dfmbiacecpehxhgsveaj.supabase.co/storage/v1/object/public/cabin-images/0.2342982044034374-cabin-007.jpg
// https://dfmbiacecpehxhgsveaj.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg