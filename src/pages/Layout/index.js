import {http} from '@/utils'
import { useEffect } from 'react';

const Layout = () => {
    useEffect(() => {
        http.get('/user/profile')
    }, [])
    return (
        <div>this is layout</div>
    )
}
export default Layout;