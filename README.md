**
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