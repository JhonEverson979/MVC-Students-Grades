import { AlunoModel } from './../Models/Aluno.model.js'

export class AlunosService {
    constructor() {
        this.alunos = []
        this.updateListAlunosFromLocaleStorage()
    }

    add(aluno) {
        if (!aluno instanceof AlunoModel) {
            throw TypeError('aluno must be an instace of AlunoModel')
        }
        this.alunos.push(aluno)
        this.updateLocaleStorage()
    }

    edit(aluno) {
        aluno.generateAvarege()
        this.updateLocaleStorage()
    }

    searchById(id) {
        return this.alunos.find(aluno => aluno._id === id)
    }

    search(name) {
        return this.alunos.filter(aluno => aluno.nome.indexOf(name) >= 0)
    }

    updateLocaleStorage() {
        const alunos = JSON.stringify(this.alunos)
        localStorage.setItem('alunos', alunos)
    }

    updateListAlunosFromLocaleStorage() {
        const local = localStorage.getItem('alunos')
        if (local) {
            const alunos = JSON.parse(local)
            alunos.forEach(aluno => {
                this.add(new AlunoModel(aluno))
            })
        }
    }
}