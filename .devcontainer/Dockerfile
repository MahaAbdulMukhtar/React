FROM node:22

# Install basic development tools
RUN apt-get update && apt-get install -y \
    git \
    less \
    man-db \
    sudo \
    curl \
    wget \
    unzip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Allow the default "node" user to use sudo without a password
ARG USERNAME=node
RUN echo "${USERNAME} ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/${USERNAME} \
    && chmod 0440 /etc/sudoers.d/${USERNAME}

# Helpful environment variable
ENV DEVCONTAINER=true

USER node