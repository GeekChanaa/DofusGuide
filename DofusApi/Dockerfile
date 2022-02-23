FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
RUN apt-get update && apt-get install -y apt-utils libgdiplus libc6-dev
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["DofusApi.csproj", "DofusApi/"]
RUN dotnet restore "DofusApi/DofusApi.csproj"
COPY . "DofusApi/"
WORKDIR "/src/DofusApi"
RUN dotnet build "/src/DofusApi/DofusApi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "/src/DofusApi/DofusApi.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "DofusApi.dll"]
