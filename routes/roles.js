const{Router}= require('express')
const routes = Router()

const{getRoles,postRoles,putRoles,patchRoles,deleteRoles}= require('../controller/roles')

routes.get('/',getRoles)
routes.post('/',postRoles)
routes.put('/',putRoles)
routes.patch('/',patchRoles)
routes.delete('/',deleteRoles)

module.exports=routes