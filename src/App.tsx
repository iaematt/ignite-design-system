import { Envelope, Lock } from 'phosphor-react';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Heading } from './components/Heading';
import { TextInput } from './components/Input';
import { Text } from './components/Text';
import { FormEvent } from 'react';

import './styles/global.css';

export function App() {
  const formSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log(event);
  };

  return (
    <div className="flex w-screen h-screen items-center justify-center flex-col text-gray-100">
      <header className="flex flex-col items-center">
        <img src="/react-logo.svg" className="w-24" />

        <Heading size="lg" className="mt-3" asChild>
          <h1>Ignite Lab</h1>
        </Heading>

        <Text className="text-gray-400">Login and start using application</Text>
      </header>

      <form className="flex flex-col justify-start w-[400px] mt-9" onSubmit={formSubmit}>
        <label className="mb-4">
          <Text asChild>
            <p className="pb-2 font-bold">Email address</p>
          </Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input type="email" name="email" placeholder="Type your email address" required />
          </TextInput.Root>
        </label>

        <label>
          <Text asChild>
            <p className="pb-2 font-bold">Password</p>
          </Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type="password" name="password" placeholder="Secret password" required />
          </TextInput.Root>
        </label>

        <label className="flex items-center gap-2 mt-4">
          <Checkbox id="remember" name="remember" />
          <Text>Remember me for 30 days</Text>
        </label>

        <Button type="submit" className="mt-8">
          Login to app
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text className="text-gray-400 hover:text-cyan-300 underline transition-colors" size="sm" asChild>
          <a href="#" title="Forge your password">
            Forgot your password
          </a>
        </Text>

        <Text className="text-gray-400 hover:text-cyan-300 underline transition-colors" size="sm" asChild>
          <a href="#" title="Register now">
            Don't have an account? Register now
          </a>
        </Text>
      </footer>
    </div>
  );
}
