import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

export function NewCycleForm() {
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="taskList"
        placeholder="Dê um nome para seu projeto"
        type="text"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="taskList">
        <option value="Teste"></option>
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        id="minutesAmount"
        placeholder="00"
        type="number"
        disabled={!!activeCycle}
        min={5}
        max={60}
        step={5}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}