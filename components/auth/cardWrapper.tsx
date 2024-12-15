'use client';
import { Card, CardHeader, CardContent, CardFooter } from '../ui/card';
import Header from './header';
import Social from './social';
import Backbutton from './backbutton';

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

const cardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <Backbutton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
  );
};

export default cardWrapper;
