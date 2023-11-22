import Ractive from 'ractive';

import template from '../../../templates/layout/body.html';

import Inicio from '../modulos/inicio';

let Body = Ractive.extend (
{ 
    isolated: false, 
    template: template,
    components:
    {
        Inicio
    }
}); 

export default Body;