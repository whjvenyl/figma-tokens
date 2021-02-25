import * as React from 'react';
import Icon from './Icon';
import {useTokenState} from '../store/TokenContext';

export default function LoadingBar() {
    const {loading} = useTokenState();

    if (!loading) return null;

    return (
        <div className="fixed w-full z-20">
            <div className="flex items-center space-x-2 bg-gray-300 p-2 rounded m-2">
                <div className="inline-flex rotate">
                    <Icon name="loading" />
                </div>
                <div className="font-medium text-xxs">Hold on, updating...</div>
            </div>
        </div>
    );
}
