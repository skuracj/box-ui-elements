/**
 * @flow
 * @file Function to render the name table cell
 * @author Box
 */

import React from 'react';
import Name from './Name';
import type {View, BoxItem} from '../../../common/types/core';

export default (
    rootId: string,
    view: View,
    onItemClick: Function,
    onItemSelect?: Function,
    canPreview: boolean = false,
    showDetails: boolean = true,
    isTouch: boolean = false,
    isDisabled: boolean,
) => ({ rowData }: { rowData: BoxItem }) => {
    // console.log('rowData => ', rowData);

    return (
        <Name
            canPreview={canPreview}
            isTouch={isTouch}
            item={rowData}
            onItemClick={onItemClick}
            onItemSelect={onItemSelect}
            rootId={rootId}
            showDetails={showDetails}
            view={view}
            isDisabled={isDisabled}
        />)
}

