import { getUserData } from "../_mihoyo_api/api";
import { searchQuery } from "../page";

export default async function page({searchParams}: searchQuery) {

    const uid = searchParams.uid;


    const data = await getUserData(uid || "");

    console.log(data)

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
          <h1>ユーザー検索結果</h1>
          {data && (
            <div style={{ marginTop: '20px', textAlign: 'left', width: '300px' }}>
              <h2>ユーザー情報</h2>
              <p>ニックネーム: {data.player.nickname}</p>
              <img src={`https://api.mihomo.me/sr_info_parsed/${data.player.avatar.id}`} alt="avatar" style={{ width: '100%' }} />

            </div>
          )}
        </div>
      );

}