import { getUserData } from "./_mihoyo_api/api"
export default async () => {
    const data = await getUserData("804995927");
    return (
        <>
            <h1>崩壊スターレイル</h1>
            <h1>{data.player.nickname}</h1> 
           
        </>
    )
}