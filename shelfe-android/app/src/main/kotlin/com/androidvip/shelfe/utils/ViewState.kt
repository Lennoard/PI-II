package com.androidvip.shelfe.utils

open class ViewState<T>(
    var data: List<T> = listOf(),
    var isLoading: Boolean = true,
    var showEmptyState: Boolean = false,
) {
    fun copyState(
        data: List<T> = this.data,
        isLoading: Boolean = this.isLoading,
        showEmptyState: Boolean = this.showEmptyState
    ): ViewState<T> {
        return ViewState(data, isLoading, showEmptyState)
    }
}
