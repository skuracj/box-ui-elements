/**
 * @flow
 * @file Content sub header component
 * @author Box
 */

import React from 'react';
import SubHeaderLeft from './SubHeaderLeft';
import type {ViewMode} from '../flowTypes';
import type {Collection, View} from '../../../common/types/core';

import './SubHeader.scss';

type Props = {
    canCreateNewFolder: boolean,
    canUpload: boolean,
    currentCollection: Collection,
    gridColumnCount?: number,
    gridMaxColumns?: number,
    gridMinColumns?: number,
    isSmall: boolean,
    maxGridColumnCountForWidth?: number,
    onCreate: Function,
    onGridViewSliderChange?: (newSliderValue: number) => void,
    onItemClick: Function,
    onSortChange: Function,
    onUpload: Function,
    onViewModeChange?: (viewMode: ViewMode) => void,
    rootId: string,
    rootName?: string,
    view: View,
    viewMode?: ViewMode,
};

const SubHeader = ({
    currentCollection,
    isSmall,
    onItemClick,
    rootId,
    rootName,
    view,
}: Props) => (
    <div className="be-sub-header" data-testid="be-sub-header">
        <SubHeaderLeft
            currentCollection={currentCollection}
            isSmall={isSmall}
            onItemClick={onItemClick}
            rootId={rootId}
            rootName={rootName}
            view={view}
        />

    </div>
);

export default SubHeader;
