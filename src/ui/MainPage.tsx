// import {Header} from "./Header.tsx";
// import {SidebarMenu} from "./SidebarMenu.tsx";
// import {PageTitle} from "./PageTitle.tsx";
import {TracksList} from "./TracksList.tsx";
import TrackDetail from "./TrackDetail.tsx";
import {useTrackSelection} from "../bll/UseTrackSelection.tsx";

// import {Footer} from "./Footer.tsx";

export function MainPage() {
    const {trackId, setTrackId} = useTrackSelection()
    const handleTrackSelect =  (id: string | null): void => {
        setTrackId(id);
    }
    return <div>
        {/*<Header/>*/}
        {/*<SidebarMenu/>*/}
        {/*<PageTitle/>*/}
        <div style={{display: 'flex'}}>
            <TracksList
                selectedTrackId = {trackId}
                onTrackSelect = {handleTrackSelect}
            />
            <TrackDetail trackId = {trackId}/>
        </div>

        {/*<Footer/>*/}
    </div>
}