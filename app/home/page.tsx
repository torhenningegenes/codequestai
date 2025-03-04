import { signOut } from '@/app/(auth)/logout/actions';
import ChatUI from '@/components/chat-ui';
import { LoggendInAs } from '@/components/loggendInAs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default async function page() {
  return (
    <div className='flex min-h-[70vh] items-center justify-center p-6 flex-col w-[100vw]'>
      <Card className='w-full max-w-4xl dark:border-neutral-800'>
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col gap-4 md:flex-row'>
            <LoggendInAs />
            <form action={signOut}>
              <Button type='submit'>Sign Out</Button>
            </form>
          </div>
        </CardContent>
        <CardFooter>
          <ChatUI />
        </CardFooter>
      </Card>
    </div>
  );
}
