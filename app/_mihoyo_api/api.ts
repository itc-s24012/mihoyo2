type MihoyoUserDataResponse = {
    player: {
        nickname: string,
       avatar: {
        id:string
       }
        
    }

}
export const getUserData = async (uid: string): Promise<MihoyoUserDataResponse> => {
    const res = await fetch(`https://api.mihomo.me/sr_info_parsed/${uid}?lang=jp`);
    return await res.json();
}