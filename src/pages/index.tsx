import { Flex, Button, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../components/Form/Input';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type SignInFormData = {
  email: string;
  password: string;
} 

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {

    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log(values);
  }

  return (
    <Flex width="100vw" height="100vh" align="center" justify="center">
        <Flex as="form" width="100%" bgColor="gray.800" maxWidth={360} p="8" borderRadius={8} flexDir="column" 
        onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing="4">
            <Input 
              name="email" 
              label="E-mail" 
              error={errors.email} 
              type="email" 
              {...register('email')}
            />

            <Input 
              name="password" 
              label="Senha" 
              error={errors.password} 
              type="password" 
              {...register('password')}
            />
          </Stack>
            
          <Button type="submit" mt="6" colorScheme="pink" size="lg" isLoading={formState.isSubmitting}>
            Entrar
          </Button>
        </Flex>
    </Flex>
  )
}
