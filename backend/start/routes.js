'use strict'
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
      Route.post('todo', 'TodoItemController.store')
      Route.get('todo', 'TodoItemController.show')
      Route.put('todo/:id', 'TodoItemController.mark_complete')
      Route.delete('todo/:id', 'TodoItemController.delete')
    }).prefix('api/')
