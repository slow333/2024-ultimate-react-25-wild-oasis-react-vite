import React from 'react';
import {Toaster} from "react-hot-toast";

const HotToaster = () => {
  return (
       <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={12}
            containerStyle={{margin: '8px'}}
            toastOptions={{
              success: { duration: 3000,  },
              error: {duration: 5000,},
              style: {
                fontSize: '16px',
                maxWidth: '500px',
                backgroundColor: "var(--color-grey-50)",
                color: "var(--color-grey-700)"
              }
            }
            }
       />
  );
};

export default HotToaster;