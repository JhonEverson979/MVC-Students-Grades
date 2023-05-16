import { AlunosService } from './Services/alunos.service.js'
import { AlunosView } from './Views/alunos.view.js'
import { AlunosContrtoller } from './Controllers/alunos.controller.js'
import { MateriasService } from './Services/materias.service.js'


const alunosService = new AlunosService()



const alunosView = new AlunosView(document.querySelector('[data-table-alunos]'), new MateriasService().materias)

const alunosController = new AlunosContrtoller(alunosService, alunosView)

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault()
  const nome = document.getElementById('first_name').value

  alunosController.add({ nome })
})

document.querySelector('#search_name').addEventListener('input', function () {
  const name = this.value
  sessionStorage.setItem('search', name)              // sessionStorage

  if (name.length > 0 || name.length === 0) {
    alunosController.search(name)
  }
})

const inputEvent = new Event('input')
if (sessionStorage.getItem('search')) {             // sessionStorage
  document.querySelector('#search_name').value = sessionStorage.getItem('search')
  document.querySelector('#search_name').dispatchEvent(inputEvent)
}