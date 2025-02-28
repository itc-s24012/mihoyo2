import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image"
import Search from "./_components/search"
import { getUserData } from './_mihoyo_api/api';
import Styles from "./page.module.css"

export type searchQuery = {
  searchParams: {
    uid?: string
  }
}

export default async function Home({searchParams}: searchQuery) {

  const uid = searchParams.uid;
  const data = await getUserData(uid || "");

  const userData = "detail" in data ?
  <div></div> :
  <div className='container'>
    <h1>ユーザー検索結果</h1>
    {data && (
      <div >
        <h2>ユーザー情報</h2>
        <p>ニックネーム: {data.player.nickname}</p>
        <p>level: {data.player.level}</p>
        <p>開拓レベル{data.player.world_level}</p>

        <div className={Styles.container_grid}>
          {data.characters.map((chara, index) => (
            <div key={index} className={Styles.char_container}>
              <Image
                src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/${chara.icon}`}
                alt=''
                width={200}
                height={200}
              />
              <p>{chara.name}</p>
              <p>level: {chara.level}</p>
              <p>運命: {chara.path.name}</p>
              <Image
                src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/${chara.path.icon}`}
                alt=''
                width={100}
                height={100}
                className={Styles.col}
              />
              <p>属性: {chara.element.name}</p>
              <Image
                src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/${chara.element.icon}`}
                alt=''
                width={100}
                height={100}
              />
              {chara.skills
                .filter((skill, index) => [0, 1, 2, 3, 5].includes(index))
                .map((skill, index) => (
                  <div  key={index}>
                    <p>{`${skill.name}: level${skill.level}`}</p>
                  </div>
                ))}
            </div>
          ))}
        </div>
        
        <div>
        </div>
      </div>
    )}
  </div>

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>崩壊スターレイル</h1>
      <h1>UID検索アプリ</h1>

      <Search placeholder="UIDを入力" path="/" queryName="uid"></Search>

      {userData}
    </div>
  );
}
