import "./App.css";
import Avatar from "./components/Avatar";
import avatars from "./data/avatar";

function App() {
  return (
    <>
      <h1>Les Simpsons</h1>
      {/** BEsoin d'ouvrir des { } en JSX pour faire du JS */}
      {
        /** Mon tableau as avatars
         * .map() method de tableau en JS qui transforme chaque élément du tableau en autre chose de spécifier
         */
        avatars.map(
          // Je déclare avatar comme alias de mon élément avatars[i]
          (avatar, index) => {
            console.log("index du tableau, ", index);
            // LA méthode map doit retourner la chose spécifiée
            return (
              <Avatar
                key={avatar.image}
                image={avatar.image}
                firstName={avatar.firstName}
                lastName={avatar.lastName}
                cls={index % 2 === 0 ? "right" : "left"}
              />
            );
          }
        )
      }
    </>
  );
}

export default App;

// pour chaque element du tableau commençant à l'index 0
// for (let index = 0; index < avatars.length; index++) {
//   // l'element est avatars[ A l index]
//   const element = avatars[index];

//   // Je veux transformer l'element en composant
//   return (
//     <Avatar
//       image={avatars[index].image}
//       firstName={avatars[index].firstName}
//       lastName={avatars[index].lastName}
//       cls="right"
//     />
//   );
// }
