import supabase from "./supabase.js";

export async function getCabins() {

  let { data, error } = await supabase
       .from('cabins')
       .select('*');
  if (error) {
    console.error(error);
    throw new Error("Cabins 데이터를 가져올수 없습니다.")
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase
       .from('cabins')
       .delete()
       .eq('id', id);
  if(error) throw new Error("Cabin could not be deleted. from error apiCabins")
  return data;
}

export async function createCabin(newCabin) {

  const { data, error } = await supabase
       .from('cabins')
       // .insert([
       //   { name: newCabin.name, maxCapacity: newCabin.maxCapacity,
       //     regularPrice: newCabin.regularPrice,
       //     discount: newCabin.discount,
       //     description: newCabin.description,
       //     // image: newCabin.image,
       //   },
       // ])
       .insert([newCabin])
  if(error) {
    console.log(error);
    throw new Error("Cabin could not be inserted. from error apiCabins");
  }
  return data;
}