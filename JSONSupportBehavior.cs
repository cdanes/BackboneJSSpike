using System;
using System.ServiceModel;
using System.ServiceModel.Channels;
using System.ServiceModel.Dispatcher;

namespace ProductLibrary
{
    class JSONPSupportInspector : IDispatchMessageInspector
    {
        public object AfterReceiveRequest(ref Message request, IClientChannel channel, InstanceContext instanceContext)
        {
            if (request.Properties.ContainsKey("UriTemplateMatchResults"))
            {
                var httpmsg = (HttpRequestMessageProperty)request.Properties[HttpRequestMessageProperty.Name];
                var match = (UriTemplateMatch)request.Properties["UriTemplateMatchResults"];

                var format = match.QueryParameters["$format"];
                if ("json".Equals(format, StringComparison.InvariantCultureIgnoreCase))
                {
                    // strip out $format from the query options to avoid an error
                    // due to use of a reserved option (starts with "$")
                    match.QueryParameters.Remove("$format");

                    // replace the Accept header so that the Data Services runtime 
                    // assumes the client asked for a JSON representation
                    httpmsg.Headers["Accept"] = "application/json, text/plain;q=0.5";
                    httpmsg.Headers["Accept-Charset"] = "utf-8";
                }
            }

            return null;
        }

        public void BeforeSendReply(ref Message reply, object correlationState)
        {
        }
    }
}
