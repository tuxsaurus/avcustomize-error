import Head from 'next/head'
import Home from 'pages/home'
import styles from '../styles/Home.module.css'

import { createClient } from '@supabase/supabase-js'
import Layout from '../components/layout'
// import Layout from "@/layout";

// console.log(`
// ▄▄▄█████▓ █    ██ ▒██   ██▒  ██████  ▄▄▄       █    ██  ██▀███   █    ██   ██████
// ▓  ██▒ ▓▒ ██  ▓██▒▒▒ █ █ ▒░▒██    ▒ ▒████▄     ██  ▓██▒▓██ ▒ ██▒ ██  ▓██▒▒██    ▒
// ▒ ▓██░ ▒░▓██  ▒██░░░  █   ░░ ▓██▄   ▒██  ▀█▄  ▓██  ▒██░▓██ ░▄█ ▒▓██  ▒██░░ ▓██▄
// ░ ▓██▓ ░ ▓▓█  ░██░ ░ █ █ ▒   ▒   ██▒░██▄▄▄▄██ ▓▓█  ░██░▒██▀▀█▄  ▓▓█  ░██░  ▒   ██▒
//   ▒██▒ ░ ▒▒█████▓ ▒██▒ ▒██▒▒██████▒▒ ▓█   ▓██▒▒▒█████▓ ░██▓ ▒██▒▒▒█████▓ ▒██████▒▒
//   ▒ ░░   ░▒▓▒ ▒ ▒ ▒▒ ░ ░▓ ░▒ ▒▓▒ ▒ ░ ▒▒   ▓▒█░░▒▓▒ ▒ ▒ ░ ▒▓ ░▒▓░░▒▓▒ ▒ ▒ ▒ ▒▓▒ ▒ ░
//     ░    ░░▒░ ░ ░ ░░   ░▒ ░░ ░▒  ░ ░  ▒   ▒▒ ░░░▒░ ░ ░   ░▒ ░ ▒░░░▒░ ░ ░ ░ ░▒  ░ ░
//   ░       ░░░ ░ ░  ░    ░  ░  ░  ░    ░   ▒    ░░░ ░ ░   ░░   ░  ░░░ ░ ░ ░  ░  ░
//             ░      ░    ░        ░        ░  ░   ░        ░        ░           ░

// Hi there hacker! If you came here we might get in touch at https://twitter.com/@tuxsaurus
// `);

import { createStore } from 'redux'
// const store = createStore(todos, ['Use Redux'])

// function addTodo(text) {
//   return {
//     type: 'ADD_TODO',
//     text,
//   }
// }

// store.dispatch(addTodo('Read the docs'))
// store.dispatch(addTodo('Read about the middleware'))

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>avcustomize</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Home />
      </Layout>
    </div>
  )
}

// https://hqrwkwuyutygkjyvvylu.supabase.co

export async function getServerSideProps() {
  const supabaseUrl = 'https://hqrwkwuyutygkjyvvylu.supabase.co'
  const supabaseKey = process.env.SUPABASE_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)

  //console.log(supabase);
  //console.log(supabaseKey);

  let { data: tuxsaurus, error } = await supabase
    .from('tuxsaurus')
    .select('email')

  console.log(tuxsaurus)
  console.log(tuxsaurus[0].email)

  return {
    props: {
      data: tuxsaurus,
    },
  }
}
