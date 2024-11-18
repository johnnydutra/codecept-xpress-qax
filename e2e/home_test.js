/// <reference types="codeceptjs" />

Feature('home')

Scenario('webapp should be online', ({ I }) => {
  I.amOnPage('/')
  I.seeTitleEquals('Gerencie suas tarefas com Mark L')
})