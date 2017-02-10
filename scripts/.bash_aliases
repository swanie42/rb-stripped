export NODE_ENV="development"
export ALIASES="$HOME/.bash_aliases"

#=========================================================================================================#
# ALIASES
#=========================================================================================================#

# unix
alias c="clear"
alias l="ls -gphlsX"
alias la="l -A"
alias lt="l -t"
alias lg="l | grep "
alias ll="la"
alias grep="grep --color=auto"
alias untar="tar xvf "
alias untarbz="tar xvjf "
alias lpath="env | grep PATH"

# files
alias salias="c && source $ALIASES"
alias calias="cat $ALIASES"
alias ealias="vim $ALIASES"
alias eprofile="vim $HOME/.profile"
alias sprofile=". $HOME/.profile"
alias ebashrc="vim $HOME/.bashrc"

# node
alias dev="npm run dev"
alias rs="reset && s"
alias nr="npm run reinstall"
alias ni="npm i"

# git
alias commit="git rev-parse HEAD"
alias ga="git add"
alias gaa="git add --all :/"
alias gac="gaa; gcm "
alias gb="git branch"
alias gcm="git commit -m"
alias gcam="git commit -am"
alias gco="git checkout"
alias gp="git push"
alias gpl="git pull"
alias gs="git status"

function g {
    git add -A;
    git commit -am "${1}";
    git push origin; git status;
}
function gclone {
    git clone git@github.com:"${1}".git
}
