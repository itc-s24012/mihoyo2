type MihoyoUserDataResponse = {
    detail?: string,
    player: {
        nickname: string,
        level: string,
        world_level: string,
       avatar: {
        id:string
       }
        
    }
    characters: {
        name: string,
        level:string,
        icon: string;
        path: {
            name: string,
            icon: string,
        }
        element: {
            name: string,
            icon: string,
        }
        skills: {
            name: string,
            level: string,
            
        }[];
    }[];
    
   

}
export const getUserData = async (uid: string): Promise<MihoyoUserDataResponse> => {
    const res = await fetch(`https://api.mihomo.me/sr_info_parsed/${uid}?lang=jp`);
    return await res.json();
}