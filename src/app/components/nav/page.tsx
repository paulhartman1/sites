'use client';
import React, { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';

import { Navbar, Modal, Link, Avatar, Text, Dropdown } from '@nextui-org/react';
import CalendarModal from '../modals/calendar/page';
import UploadModal from '../modals/upload/page';
import { UserProvider, useUser } from '@auth0/nextjs-auth0/client';

export default function Nav() {
  const [showCalModal, setShowCalModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [categories, setCategories] = useState<any>([
    { 0: 'Face Painting' },
    { 1: 'Bug Shows' },
    { 2: 'Guitar Lessons' },
    { 3: 'Art Projects' },
    { 4: 'Performance Schedule' },
  ]);

  const [selected, setSelected] = useState(new Set(['text']));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(', ').replaceAll('_', ' '),
    [selected]
  );

  const [collapseItems, setCollapseItems] = useState<any[]>([]);

  const router = useRouter();

  useEffect(() => {
    const items = categories.map((category: any, index: number) => {
      return category[index];
    });
    setCollapseItems(items);
  }, [categories]);

  useEffect(() => {
    console.log(selected);
    switch (selected.entries().next().value[0]) {
      case 'profile':
        router.push('/profile');
        break;
      case 'settings':
        router.push('/settings');
        break;
      case 'upload':
        if (!user?.email) router.push('/api/auth/login');
        else if (user?.email == 'dave@davidghartman.com') setShowUploadModal(true);
        break;
      case 'library':
        router.push('/library');
        break;
      case 'configurations':
        router.push('/configurations');
        break;
      case 'help_and_feedback':
        router.push('/help_and_feedback');
        break;
      case 'logout':
        router.push('/api/auth/logout');
        break;
      default:
        break;
    }

    // if (
    //   selected.entries().next().value[0] == 'upload' &&
    //   user?.email === 'dave@davidghartman.com'
    // ) {
    //   setShowUploadModal(true);
    //   setSelected(new Set(['text']));
    // }
  }, [selected]);

  const handleProfileMenuSelection = (e: any) => {
    setSelected(e);
    console.log(selected);
  };

  const calCloseHandler = () => {
    setShowCalModal(false);
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
            <Dropdown placement="bottom-right">
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="primary"
                  size="md"
                  src={user?.picture || undefined}
                />
              </Dropdown.Trigger>
              <Dropdown.Menu
                color="secondary"
                selectionMode="single"
                selectedKeys={selected}
                onSelectionChange={handleProfileMenuSelection}
              >
                <Dropdown.Item key="profile" css={{ height: '$18' }}>
                  <Text b color="inherit" css={{ d: 'flex' }}>
                    {user?.name || 'Guest'}
                  </Text>
                </Dropdown.Item>
                <Dropdown.Item key="settings" withDivider>
                  My Settings
                </Dropdown.Item>

                <Dropdown.Item key="upload" withDivider>
                  Upload
                </Dropdown.Item>
                <Dropdown.Item key="library">Library</Dropdown.Item>

                <Dropdown.Item key="configurations">
                  Configurations
                </Dropdown.Item>
                <Dropdown.Item key="help_and_feedback" withDivider>
                  Help & Feedback
                </Dropdown.Item>
                <Dropdown.Item key="logout" withDivider color="error">
                  Log Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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
      <UploadModal
        open={showUploadModal}
        onClose={() => setShowUploadModal(false)}
        env={process.env}
      />
    </UserProvider>
  );
}
