<<<<<<< HEAD
**📃 Basic Tempelate of the project 

 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - ResturantContainer
 * - RestaurantCard
 *  - Image
 *  - Name od Res, Start Rating, Cuisine, delivery type
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

 Type of Export/Import

 1. Default Export/Import
    
    Each module can have only one default export. It is imported without curly braces.

    export default Component
    import Component from "path"

 2. Named Export/Import

    You can have multiple named exports in a module. They are imported using curly braces.
    
    export const component = '....'
    import {component} from "path"
=======
Food Ordering App
>>>>>>> 11fbd603279c0fac2b8a65b824ff1e77f08cdd8b


#React Hooks

A normal javascript utility functions

1. useState(): Use to create superpowerful state variables in react. It maintains the state of the variable.

const [reslist, setreslist] = useState([default value]) - State variable
let reslist - Normal variable

We can only modify the 

2. useEffect()