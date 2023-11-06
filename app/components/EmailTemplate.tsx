import * as React from 'react';

interface EmailTemplateProps {
  name?: string;
  email?: string;
  clube?: string;
  phone?: string;
  message?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, email, clube, phone, message
}) => (
  <ul>
    <li>Nome: {name}</li>
    <li>Clube: {clube} </li>
    <li>email: {email} </li>
    <li>telefone: {phone} </li>
    <li>message:{message}</li>
  </ul>
);