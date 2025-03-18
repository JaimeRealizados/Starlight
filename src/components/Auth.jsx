import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Auth() {

    const mockUser = {
        email: 'test@example.com',
        // Add any other user properties you need for development
      };
    
      return (
        <div>
          {/* Always show the logged-in state */}
          <p>Bienvenido, {mockUser.email}</p>
          
          {/* Commenting out the actual auth logic for now
          {user ? (
            <p>Bienvenido, {user.email}</p>
          ) : (
            <button onClick={() => supabase.auth.signInWithOAuth({ provider: 'github' })}>
              Login con GitHub
            </button>
          )}
          */}
        </div>
      );
  
  
  
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const { data: { user } } = await supabase.auth.getUser();
//       setUser(user);
//     };
//     fetchUser();
//   }, []);

//   return (
//     <div>
//       {user ? (
//         <p>Bienvenido, {user.email}</p>
//       ) : (
//         <button onClick={() => supabase.auth.signInWithOAuth({ provider: 'github' })}>
//           Login con GitHub
//         </button>
//       )}
//     </div>
//   );
}