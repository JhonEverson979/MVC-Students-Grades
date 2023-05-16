import { AlunosService } from "./js/Services/alunos.service.js"
import{EditAlunoView} from './js/Views/EditAluno.view.js'
import {EditAlunoController} from './js/Controllers/EditAluno.controller.js'
import { MateriasService } from "./js/Services/materias.service.js"

const alunosService = new AlunosService()

        // alunos.forEach(aluno => {
        //     alunosService.add(new AlunoModel(aluno))
        //   })

          const paramsString = window.location.search
          const URLparams = new URLSearchParams(paramsString)
          const id =  parseInt(URLparams.get("id"))

          const aluno = alunosService.searchById(id)

          document.getElementById('first_name').value = aluno.nome

          const editAlunoView = new EditAlunoView(document.querySelector('[data-edit-aluno-form]'), new MateriasService().materias)

          const editAlunoController = new EditAlunoController(aluno, editAlunoView, alunosService)

          document.querySelector('form').addEventListener('submit', function(e){
            e.preventDefault()
            const nome = document.querySelector('#first_name').value

            editAlunoController.edit(aluno, nome)
            window.location.assign('index.html')

          })