interface Props {
  subject: string;
  message: string;
}

function EmailTemplate({ subject, message }: Props) {
  return (
    <>
      <h1>{subject}</h1>
      <p>Thank you for contacting us!</p>
      <p>New message submitted:</p>
      <p>{message}</p>
    </>
  );
}

export default EmailTemplate;
