import { GitHubLogoIcon } from '@radix-ui/react-icons';

import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 w-full bg-black/10 backdrop-blur-lg z-10">
        <div className="px-4 py-2 flex items-center gap-2 ">
          <div className="flex justify-center items-center">
            <span className="font-bold text-2xl lilita-one-regular">Mostro Hunter</span>
          </div>
          <div className="ml-auto flex gap-2">
            <Button variant="link" size="icon" asChild className="ml-8">
              <a href="https://github.com/tincho70/mostro-hunter" target="_blank" rel="noreferrer">
                <GitHubLogoIcon />
              </a>
            </Button>

            <ModeToggle />
          </div>
        </div>
      </div>
    </>
  );
};
