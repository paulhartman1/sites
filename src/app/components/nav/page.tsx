'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { Navbar, Modal, Link, Avatar, Text, Dropdown } from '@nextui-org/react';
import CalendarModal from '../modals/calendar/page';
import { UserProvider, useUser } from '@auth0/nextjs-auth0/client';

export default function Nav() {
  const [showCalModal, setShowCalModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [categories, setCategories] = useState<any>([
    { 0: 'Face Painting' },
    { 1: 'Bug Shows' },
    { 2: 'Guitar Lessons' },
    { 3: 'Art Projects' },
    { 4: 'Performance Schedule' },
  ]);

  const [collapseItems, setCollapseItems] = useState<any[]>([]);

  const router = useRouter();

  useEffect(() => {
    const items = categories.map((category: any, index: number) => {
      return category[index];
    });
    setCollapseItems(items);
  }, [categories]);

  const calCloseHandler = () => {
    setShowCalModal(false);
  };

  const loginCloseHandler = () => {
    setShowLoginModal(false);
  };

  const logInHandler = () => {
    alert('Log In');
  };

  const calOnChangeHandler = (e: unknown) => {
    console.log(e);
  };
  function handleClick(): void {
    router.push('/');
  }

  const { user, isLoading } = useUser();

  return (
    <UserProvider>
      <Navbar isBordered variant="floating">
        <Navbar.Toggle showIn={'md'} />
        <Navbar.Brand>
          {/* <Image
                src="/artistProfile.png"
                alt="NextUI"
                width="112px"
                height="28px"
                className='logo'
            >
            </Image> */}
          <Text b color="inherit" className="logo-text" onClick={handleClick}>
            David G Hartman
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn={'md'}>
          <Navbar.Link
            href="#"
            onClick={() => {
              setShowCalModal(true);
            }}
          >
            Book Me
          </Navbar.Link>
          {categories.map((category: any, index: number) => {
            return (
              <Navbar.Link href={`/${index}`} key={index}>
                {category[index]}
              </Navbar.Link>
            );
          })}
        </Navbar.Content>
        <Navbar.Content>
          {!user?.name && (
            <Navbar.Link color="inherit" href="/api/auth/login">
              Login
            </Navbar.Link>
          )}
          {user?.name && (
            <Navbar.Link color="inherit" href="/api/auth/logout">
              Logout
            </Navbar.Link>
          )}
          {/* <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item> */}

          {
            <Avatar
              bordered
              as="button"
              color="primary"
              size="md"
              src={user?.picture || undefined}
              onClick={() => {
                if(user?.name) {
                  console.log(user);
                } else {
                  console.log('no user');
                }
              }}
            />
          }
        </Navbar.Content>

        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="warning"
              css={{
                color: index === collapseItems.length - 1 ? '$error' : '',
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: '100%',
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>

      <CalendarModal
        open={showCalModal}
        onClose={calCloseHandler}
        onChange={calOnChangeHandler}
      />

      
    </UserProvider>
  );
}
