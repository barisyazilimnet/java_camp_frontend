import React from "react";
import { Menu, Image, Dropdown } from "semantic-ui-react";

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image avatar spaced="right" src="https://pbs.twimg.com/profile_images/751840124288241664/KS9dtQTE_400x400.jpg" />
        <Dropdown pointing="top" text="Barış KURT">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info"></Dropdown.Item>
            <Dropdown.Item onClick={signOut} text="Çıkış yap" icon="sign-out"></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
