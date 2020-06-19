'use strict'

const TodoItem = use('App/Models/TodoItem')
class TodoItemController {
 async show ({response}) {
   let items = await TodoItem.all()

   return response.json(items)
 }

 async store ({request, response}) {
   const itemInfo = request.post().data

   const item = new TodoItem()
   item.title = itemInfo.title
   item.description = itemInfo.description
   item.priority = itemInfo.priority
   item.complete_by = new Date(itemInfo.complete_by)
   await item.save()

   return response.status(201).json(item)
 }

 async mark_complete ({params, response}) {
   const item = await TodoItem.find(params.id)
   if (!item) {
     return response.status(404).json({data: 'Resource not found'})
   }
   item.completed = true
   await item.save()
   return response.status(200).json(item)
 }

 async delete ({params, response}) {
   const item = await TodoItem.find(params.id)
   if (!item) {
     return response.status(404).json({data: 'Resource not found'})
   }
   await item.delete()

   return response.status(204).json(null)
 }
}

module.exports = TodoItemController
