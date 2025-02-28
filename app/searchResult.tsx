import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getUserData } from "./_mihoyo_api/api";

type UserData = { player: { nickname: string, avatar: { id: string } } };

export default function SearchResult() {
//   const router = useRouter();
//   const { uid } = router.query;
  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (uid) {
//       getUserData(uid as string)
//         .then(data => {
//           setUserData(data);
//           setError(null);
//         })
//         .catch(err => {
//           setError("ユーザーデータの取得に失敗しました。");
//           setUserData(null);
//         });
//     }
//   }, [uid]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>ユーザー検索結果</h1>
      {error && <p>{error}</p>}
      {userData && (
        <div style={{ marginTop: '20px', textAlign: 'left', width: '300px' }}>
          <h2>ユーザー情報</h2>
          <p>ニックネーム: {userData.player.nickname}</p>
          <img src={`https://api.mihomo.me/sr_info_parsed/${userData.player.avatar.id}`} alt="avatar" style={{ width: '100%' }} />
        </div>
      )}
    </div>
  );
}
