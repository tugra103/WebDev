import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      
      {/* Pages */}
      <li className="flex items-center gap-x-2 p-1 font-medium">
        <Typography variant="small" color="blue-gray" className="flex items-center gap-x-2">
          <svg width="16" height="15" viewBox="0 0 16 15" fill="none">
            <path
              d="M5 0.5C4.73478 0.5 4.48043 0.605357 4.29289 0.792893C4.10536 0.98043 4 1.23478 4 1.5C4 1.76522 4.10536 2.01957 4.29289 2.20711C4.48043 2.39464 4.73478 2.5 5 2.5H11C11.2652 2.5 11.5196 2.39464 11.7071 2.20711C11.8946 2.01957 12 1.76522 12 1.5C12 1.23478 11.8946 0.98043 11.7071 0.792893C11.5196 0.605357 11.2652 0.5 11 0.5H5Z"
              fill="#90A4AE"
            />
          </svg>
          <a href="#">Pages</a>
        </Typography>
      </li>

      {/* Account */}
      <li className="flex items-center gap-x-2 p-1 font-medium">
        <Typography variant="small" color="blue-gray" className="flex items-center gap-x-2">
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 8.5C16 10.6217 15.1571 12.6566 13.6569 14.1569C12.1566 15.6571 10.1217 16.5 8 16.5C5.87827 16.5 3.84344 15.6571 2.34315 14.1569C0.842855 12.6566 0 10.6217 0 8.5C0 6.37827 0.842855 4.34344 2.34315 2.84315C3.84344 1.34285 5.87827 0.5 8 0.5C10.1217 0.5 12.1566 1.34285 13.6569 2.84315C15.1571 4.34344 16 6.37827 16 8.5Z"
              fill="#90A4AE"
            />
          </svg>
          <a href="#">Account</a>
        </Typography>
      </li>

      {/* Blocks */}
      <li className="flex items-center gap-x-2 p-1 font-medium">
        <Typography variant="small" color="blue-gray" className="flex items-center gap-x-2">
          <svg width="14" height="15" viewBox="0 0 14 15" fill="none">
            <path
              d="M2 0.5C1.46957 0.5 0.960859 0.710714 0.585786 1.08579C0.210714 1.46086 0 1.96957 0 2.5V4.5C0 5.03043 0.210714 5.53914 0.585786 5.91421C0.960859 6.28929 1.46957 6.5 2 6.5H4C4.53043 6.5 5.03914 6.28929 5.41421 5.91421C5.78929 5.53914 6 5.03043 6 4.5V2.5Z"
              fill="#90A4AE"
            />
          </svg>
          <a href="#">Blocks</a>
        </Typography>
      </li>

      {/* Docs */}
      <li className="flex items-center gap-x-2 p-1 font-medium">
        <Typography variant="small" color="blue-gray" className="flex items-center gap-x-2">
          <svg width="16" height="15" viewBox="0 0 16 15" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 2.5C0 1.96957 0.210714 1.46086 0.585786 1.08579C0.960859 0.710714 1.46957 0.5 2 0.5H14C14.5304 0.5 15.0391 0.710714 15.4142 1.08579C15.7893 1.46086 16 1.96957 16 2.5V12.5C16 13.0304 15.7893 13.5391 15.4142 13.9142C15.0391 14.2893 14.5304 14.5 14 14.5H2Z"
              fill="#90A4AE"
            />
          </svg>
          <a href="#">Docs</a>
        </Typography>
      </li>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">

        <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium">
          Material Tailwind
        </Typography>

        <div className="hidden lg:block">{navList}</div>

        <div className="flex items-center gap-x-1">
          <Button variant="text" size="sm" className="hidden lg:inline-block">
            Log In
          </Button>
          <Button variant="gradient" size="sm" className="hidden lg:inline-block">
            Sign in
          </Button>
        </div>

        <IconButton
          variant="text"
          className="ml-auto lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? "X" : "☰"}
        </IconButton>
      </div>

      <MobileNav open={openNav}>
        {navList}
      </MobileNav>
    </Navbar>
  );
}