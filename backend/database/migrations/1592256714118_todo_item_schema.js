'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TodoItemSchema extends Schema {
  up () {
    this.create('todo_items', (table) => {
      table.increments()
      table.string("title")
      table.text("description").nullable()
      table.string("priority")
      table.boolean("completed").defaultTo(false)
      table.date("complete_by").nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('todo_items')
  }
}

module.exports = TodoItemSchema
