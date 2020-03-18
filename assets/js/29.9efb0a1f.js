(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{265:function(e,t,o){"use strict";o.r(t);var r=o(19),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"如何使用-azcopy-同步-azure-blob-存储"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#如何使用-azcopy-同步-azure-blob-存储"}},[e._v("#")]),e._v(" 如何使用 AZCOPY 同步 Azure Blob 存储")]),e._v(" "),o("ContentMeta"),e._v(" "),o("blockquote",[o("p",[e._v("几个月前，我写了一篇关于 "),o("a",{attrs:{href:"https://www.thomasmaurer.ch/2019/06/sync-folder-with-azure-blob-storage/",target:"_blank",rel:"noopener noreferrer"}},[e._v("如何使用 AzCopy 同步文件到 Azure Blob 存储"),o("OutboundLink")],1),e._v(" 的博客。今天针对我在 "),o("a",{attrs:{href:"https://github.com/Azure/azure-storage-azcopy/issues/116#issuecomment-554186120",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),o("OutboundLink")],1),e._v(" 上使用 AzCopy 的一个问题，有了一个激动人心的更新。这意味着您现在可以使用 AzCopy 从 Azure Blob 到 Azure Blob。")])]),e._v(" "),o("blockquote",[o("p",[e._v("Azure Blob <-> Azure Blob (源必须包括共享访问令牌 SAS 或者可公共访问，对于目标可以支持共享访问令牌  SAS 或者 OAuth 认证)")])]),e._v(" "),o("h2",{attrs:{id:"如何在-azure-blob-存储之间同步"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#如何在-azure-blob-存储之间同步"}},[e._v("#")]),e._v(" 如何在 Azure Blob 存储之间同步")]),e._v(" "),o("p",[e._v("作为准备工作，您将需要 "),o("code",[e._v("安装并设置 AzCopy")]),e._v(" ，或者在 "),o("a",{attrs:{href:"https://www.thomasmaurer.ch/2019/01/azure-cloud-shell/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cloud Shell"),o("OutboundLink")],1),e._v(" 中使用 AzCopy.")]),e._v(" "),o("p",[e._v("您可以使用下述命令将 Azure blob 存储同步到另外一个 Azure Blob 中。该命令将仅仅同步发生变化和新建的文件。其比较文件的名称和最后修改时间戳。")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('azcopy sync "https://[account].blob.core.windows.net/[container]/[path/to/blob]?[SAS]" "https://[account].blob.core.windows.net/[container]/[path/to/blob]?[SAS]"\n')])])]),o("p",[e._v("对于目标，你既可以使用 SAS 或者 OAuth。为了同步一个存储账号中的整个容器或者文件夹到另外一个账号，你可以使用下述命令：")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('azcopy sync "https://[account].blob.core.windows.net/[container]?[SAS]" "https://[account].blob.core.windows.net/[container]"\n')])])]),o("p",[e._v("作为示例，这里我将从在北欧区的 Azure 存储账号的一个容器中的文件，复制到西欧区的另一个存储账号中。")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://www.thomasmaurer.ch/wp-content/uploads/2019/11/Azure-Storage-Accounts-768x407.jpg",alt:"Azure 存储帐户"}})]),e._v(" "),o("p",[e._v("我使用如下命令来实现：")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('azcopy sync "https://tomnortheurope.blob.core.windows.net/myfiles?[SAS]" "https://tomwesteurope.blob.core.windows.net/destinationfiles?[SAS]" --recursive=true\n')])])]),o("p",[o("img",{attrs:{src:"https://www.thomasmaurer.ch/wp-content/uploads/2019/11/Sync-Azure-Blob-Storage-with-AzCopy-768x390.jpg",alt:"使用AzCopy同步Azure Blob存储"}})]),e._v(" "),o("p",[e._v("您可以看到，在第一次运行时，它确实将所有文件从源存储帐户复制到了目标位置。 在第二次运行中，它没有复制任何文件，因为文件已经存在了。")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://www.thomasmaurer.ch/wp-content/uploads/2019/11/Synced-Azure-Storage-Accounts-768x324.jpg",alt:"已同步的Azure存储帐户"}})]),e._v(" "),o("p",[e._v("下面是一系列可以使用的参数。您可以在"),o("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-ref-azcopy-sync?WT.mc_id=thomasmaurer-blog-thmaure",target:"_blank",rel:"noopener noreferrer"}},[e._v("微软 Docs"),o("OutboundLink")],1),e._v("上发现更多的关于 "),o("code",[e._v("AzCopy sync")]),e._v(" 的命令。")]),e._v(" "),o("p",[o("code",[e._v("–block-size-mb")]),e._v("  在上传到 Azure 存储或者从 Azure 存储下载时，使用的块尺寸 (以 MiB 为单位) 。默认基于文件尺寸自动计算。支持使用十进制小数(例如：0.25)。")]),e._v(" "),o("p",[o("code",[e._v("–check-md5")]),e._v(" 字符串，指定在下载时，如何强制 MD5 散列值用于验证。该选项仅在下载时可用。可用值包括：NoCheck, LogOnly, FailIfDifferent, FailIfDifferentOrMissing. (默认值：‘FailIfDifferent’)。")]),e._v(" "),o("p",[o("code",[e._v("–delete-destination")]),e._v(" 字符串。定义是否删除源中没有提供的目标中的其它文件。可以设置为： true, false, 或者 prompt。如果设置为 prompt，在删除文件或者 blob 之前，用户将被要求确认 (默认 false)。")]),e._v(" "),o("p",[o("code",[e._v("–exclude-attributes")]),e._v(" 字符串（仅 Windows)，排除匹配文件属性的文件。例如：A;S;R")]),e._v(" "),o("p",[o("code",[e._v("–exclude-pattern")]),e._v(" 字符串，排除匹配模板列表的文件，例如：.jpg;*.pdf;exactName")]),e._v(" "),o("p",[o("code",[e._v("-h, –help")]),e._v(" 使用帮助")]),e._v(" "),o("p",[o("code",[e._v("–include-attributes")]),e._v(" 字符串 (仅 Windows)，仅包含匹配文件属性列表的文件。例如： A;S;R")]),e._v(" "),o("p",[o("code",[e._v("–include-pattern")]),e._v(" 字符串，仅包含匹配模板列表的文件。例如： "),o("em",[e._v(".jpg;")]),e._v(".pdf;exactName")]),e._v(" "),o("p",[o("code",[e._v("–log-level")]),e._v(" 字符串， 定义日志文件的日志级别。可用的级别：INFO(所有的请求和响应)， WARNING(慢速响应)， ERROR(仅仅失败的请求)， 以及 NONE(没有输出日志). (默认 INFO). (default “INFO”)")]),e._v(" "),o("p",[o("code",[e._v("–put-md5")]),e._v(" 对每个文件创建 MD5 散列，并保存将散列值作为目标 blob 或文件的 Content-MD5 属性。 (默认情况下，"),o("strong",[e._v("不")]),e._v("创建散列)。仅在上传时可用。")]),e._v(" "),o("p",[o("code",[e._v("–recursive")]),e._v("  默认为 True，当在目录之间同步的时候，递归进入子目录 (默认为 true)。")]),e._v(" "),o("p",[e._v("如果您希望了解更多关于同步本地文件到 Azure blob 存储的内容，请查看我的博客。我希望这可以帮助您快速查看如何使用 AzCopy 同步 Azure blob 存储。如果您希望学习更多内容，请查看微软 Docs 中关于如何  "),o("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-ref-azcopy-sync?WT.mc_id=thomasmaurer-blog-thmaure",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用 AzCopy 传输数据"),o("OutboundLink")],1),e._v("。如果有任何问题，请留言。")])],1)}),[],!1,null,null,null);t.default=a.exports}}]);