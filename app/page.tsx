import Image from 'next/image';
import styles from './home.module.css';
import { error } from 'console';

export default function Home() {
  // Types string, number
  let name: string;

  name = 'John Doe';

  let age: number;
  age = 30;

  let stringOrNumber: string | number;
  stringOrNumber = 30;

  // ARRAY
  let clients = ['John', 'Mary', 'Bob'];
  // error
  // clients.push(12);
  clients.push('Ana');

  let stringArray: string[];
  stringArray = ['John', 'Mary', 'Bob'];
  // error
  // stringArray.push(12);

  let numberArray: Array<number>;
  numberArray = [1, 2, 3, 4, 5];
  // error
  // numberArray.push('Ana');

  let stringOrNumberArray: Array<string | number>;
  stringOrNumberArray = [1, 2, 3, 4, 5, 'Ana'];
  // error
  // stringOrNumberArray.push(true);

  // OBJECT
  let persons: { name: string; age: number; adult: boolean } = {
    name: 'John Doe',
    age: 30,
    adult: true,
    // error
    // admin: false,
  };

  // error
  // persons.age = 'Ana';
  // persons.admin = 'Admin';

  let persons2: {
    name: string;
    age: number;
    adult: boolean;
    // conditional?:
    phone?: string;
  };

  persons2 = {
    name: 'John Doe',
    age: 30,
    adult: true,
    // phone: '123456789',
  };

  // Any
  let variable: any;
  variable = 'Ana';
  variable = true;
  variable = {};
  variable = [];

  // Functions
  function returnName(): string {
    return name;
  }

  function returnAge(): number {
    return age;
  }

  // Type Aliases
  type Color = 'red' | 'green' | 'blue';
  type PersonType = {
    name: string;
    age: number;
    adult?: boolean;
  };

  let personFunction = (user: PersonType) => {
    //  return `${user.name} ${user.age}`;
  };

  type UserType2 = {
    name: string;
    age: number;
    adult?: boolean;
    theme: 'dark' | 'light';
  };

  const userWithTheme: UserType2 = {
    name: 'John Doe',
    age: 30,
    adult: true,
    theme: 'dark',
  };

  // Interfaces
  interface IUser {
    name: string;
    email: string;
    age: number;
  }

  const user: IUser = {
    name: 'John Doe',
    email: 'asdasd@asdad.com',
    age: 30,
  };

  interface IEmployee extends IUser {
    emloyeeId: number;
  }

  const employee: IEmployee = {
    emloyeeId: 1,
    name: 'John Doe',
    email: 'test@test.com',
    age: 30,
  };

  const client: IUser = {
    name: 'John Doe',
    email: 'a@a.com',
    age: 30,
  };

  // Generics
interface IAuthor {
  id: number;
  username: string;
}

interface ICategory {
  id: number;
  title: string;
}

interface IPost {
  id: number;
  title: string;
  desc: string;
  extra: IAuthor[] | ICategory[];
}

interface IPostBetter<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}
const testMe: IPostBetter<string> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: ["str", "str2"],
};

interface IPostEvenBetter<T extends object> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe2: IPostEvenBetter<{ id:number }> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: [{ id: 1 }],
};

const testMe3: IPostEvenBetter<IAuthor> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: [{ id: 1, username: "john" }],
};

const testMe4: IPostEvenBetter<ICategory> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: [{ id: 1, title: "cat" }],
};

  return (
    <main className={styles.main}>
      <section className={styles.home}>
        <div className="container">
          <h1 className={styles.title}>{name}</h1>
          <p className={styles.description}>Age: {age}</p>
          {/* Array 1*/}
          <ul className={styles.array}>
            {clients.map((client, index) => {
              return (
                <li className={styles.arrayItem} key={index}>
                  {client}
                </li>
              );
            })}
          </ul>

          {/* Object */}
        </div>
      </section>
    </main>
  );
}
