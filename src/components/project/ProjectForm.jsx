import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

function ProjectForm({ projectId }) {
  return (
    <div>
      <form className={styles.form}>
        <Input
          name="name"
          type="text"
          text="Nome do Projeto"
          placeholder="Insira o nome do projeto"
        />
        <Input
          name="budget"
          type="number"
          text="Orçamento do Projeto"
          placeholder="Insira o orçamento total"
        />
        <Select name="category_id" text="Selecione a categoria" value="" />
      </form>
      <SubmitButton text={projectId ? 'Salvar' : 'Criar Projeto'} />
    </div>
  )
}

export default ProjectForm
