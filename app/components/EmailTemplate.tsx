interface Props {
  subject: string;
  message: string;
}

function EmailTemplate({ subject, message }: Props) {
  return (
    <>
      <p>Thank you for contacting me!</p>
      <p>New message submitted:</p>
      <p>{message}</p>
    </>
  );
}

export default EmailTemplate;
