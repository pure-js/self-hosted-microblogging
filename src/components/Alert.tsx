interface IAlertProps {
  message: string;
  type: string;
}

function Alert ({ message, type }: IAlertProps) {
  return (
    <section className="bg-green-200">
      { message }
    </section>
  )
}

export default Alert;
