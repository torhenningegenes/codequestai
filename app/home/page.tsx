import { signOut } from '@/app/(auth)/logout/actions';
import ChatUI from '@/components/chat-ui';
import { LoggendInAs } from '@/components/loggendInAs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default async function page() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-4 w-auto'>
      <Card className='w-full'>
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
