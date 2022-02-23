FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
RUN apt-get update && apt-get install -y apt-utils libgdiplus libc6-dev
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["DofusApi.Hdv.csproj", "DofusApi.Hdv/"]
RUN dotnet restore "DofusApi.Hdv/DofusApi.Hdv.csproj"
COPY . "DofusApi.Hdv/"
WORKDIR "/src/DofusApi.Hdv"
RUN dotnet build "/src/DofusApi.Hdv/DofusApi.Hdv.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "/src/DofusApi.Hdv/DofusApi.Hdv.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "DofusApi.Hdv.dll"]
