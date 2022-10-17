import './styles/global.css';

import { Envelope, Lock } from 'phosphor-react';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Heading } from './components/Heading';
import { TextInput } from './components/Input';
import { Text } from './components/Text';

export function App() {
  return (
    <div className="flex w-full h-full items-center justify-center flex-col bg-gray-900">
      <img src="/react-logo.svg" className="w-24" />
      <Heading asChild>
        <h1>Ignite Lab</h1>
      </Heading>
      <Text asChild>
        <p className="text-gray-400">Login and start using!</p>
      </Text>

      <form className="flex flex-col justify-start w-[400px] mt-9 mb-9">
        <label className="mb-4">
          <Text asChild>
            <p className="pb-2 font-bold">Email address</p>
          </Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input type="email" placeholder="Type your email address" required />
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
            <TextInput.Input type="password" placeholder="Secret password" required />
          </TextInput.Root>
        </label>

        <label className="flex items-center gap-2 mt-4 mb-8">
          <Checkbox id="remember" />
          <Text>Remember me for 30 days</Text>
        </label>

        <Button>Login to app</Button>
      </form>

      <Text asChild>
        <a href="#" className="">
          Forgot your password
        </a>
      </Text>

      <Text asChild>
        <a href="#" className="mt-2">
          Don't have an account? Create one now.
        </a>
      </Text>
    </div>
  );
}
