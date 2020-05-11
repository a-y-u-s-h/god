#!/usr/bin/env bash

#  ======================================
#
#      /$$$$$$   /$$$$$$  /$$$$$$$
#     /$$__  $$ /$$__  $$| $$__  $$
#    | $$  \__/| $$  \ $$| $$  \ $$
#    | $$ /$$$$| $$  | $$| $$  | $$
#    | $$|_  $$| $$  | $$| $$  | $$
#    | $$  \ $$| $$  | $$| $$  | $$
#    |  $$$$$$/|  $$$$$$/| $$$$$$$/
#     \______/  \______/ |_______/
#
#  ======================================
#
#  I create, destroy and modify stuff.
#  With my power, you'll spend your time
#  on stuff that you ought to do. I'll
#  prevent you from getting caught in the
#  illusion of 'getting things done' by
#  removing away many common things you
#  repeatedly do throughout your life:
#
#  1. Scaffolding for multiple languages/frameworks  : god create [query]
#  2. Run files/projects with one simple command     : god run [query]
#
#  ======================================

#  ======================================
#
#    Declaring some path variables,
#    and importing required scripts.
#    Root path will let scripts obtain
#    files that are relative to them
#    and paste them anywhere on computer.
#
#  ======================================

GOD=$(dirname -- $(realpath -- "$0"))
source $(dirname -- $(realpath -- "$0"))/src/containers/run.sh
source $(dirname -- $(realpath -- "$0"))/src/containers/create.sh
source $(dirname -- $(realpath -- "$0"))/src/containers/compile.sh
source $(dirname -- $(realpath -- "$0"))/src/containers/update.sh

# <------------------------------>

function god () {
  god.run     ${GOD} $@
  god.create  ${GOD} $@
  god.compile ${GOD} $@
  god.update  ${GOD} $@
}
