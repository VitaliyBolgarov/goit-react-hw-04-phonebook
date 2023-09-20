import {useEffect} from 'react';
import { useForm } from 'react-hook-form';

import {
  StyledButton,
  LabelWrapper,
  ErrorMessage,
  Form,
  FormField,
  FieldInput,
} from './ContactForm.styled';

export const ContactForm = ({ onAddContact }) => {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  useEffect(() => {
    setFocus('name');
  }, [setFocus]);

  return (
    <Form
      autoComplete="off"
      onSubmit={handleSubmit(data => {
        onAddContact({ ...data });
        reset();
      })}
    >
      <FormField htmlFor="name">
        <LabelWrapper>
          Name
        </LabelWrapper>
        <FieldInput
          type="text"
          placeholder="Your name"
          {...register('name', {
            required: `This field is required`,
            pattern:
              /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
          })}
        />
        {errors?.name && (
          <ErrorMessage>
            {errors?.name?.message ||
              `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore
            d'Artagnan`}
          </ErrorMessage>
        )}
      </FormField>

      <FormField htmlFor="number">
        <LabelWrapper>
           Number
        </LabelWrapper>
        <FieldInput
          type="tel"
          placeholder="+123-45-67"
          {...register('number', {
            required: `This field is required`,
            minLength: {
              value: 7,
              message: `Min 7 numbers. Phone number must be digits and can contain spaces, dashes, parentheses and can start with +`,
            },
            pattern:
              /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
          })}
        />

        {errors?.number && (
          <ErrorMessage>
            {errors?.number?.message ||
              `Phone number must be digits and can contain spaces, dashes, parentheses and can start with +`}
          </ErrorMessage>
        )}
      </FormField>
      <StyledButton type="submit" disabled={!isValid}>
        Add contact
      </StyledButton>
    </Form>
  );
};
